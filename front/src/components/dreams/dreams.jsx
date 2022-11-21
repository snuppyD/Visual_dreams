import React, { useEffect,useState, useRef } from "react";
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from "react-redux";
import { useSortByName,useSortByTime,useSortByPrice } from "../../hooks/useSortDreams";
import { getDreams } from "../../store/dreams/dreamsSlice";
import { Button } from "../button";
import { ContentWrapper } from "../content-wrapper";
import { DreamItem } from "../dream-item";
import { Spinner } from "../spinner";
import styles from "./styles.module.css";
import { StyledSort,StyledPopUp } from "../../styled/Dreams.styled";
import { StyledInputSearch } from "../../styled/CreateDreamPage.styled";
import { CreateDreamPage } from "../../pages/create-dream-page/create-dream-page";


export const Dreams = () => {
  const dispatch = useDispatch();
  const { dreams, isLoading } = useSelector((state) => state.dreams);
  const { isDescSortByName, setIsDescSortByName, sortedByName } = useSortByName(
    dreams || []
  );
  const { isDescSortByPrice, setIsDescSortByPrice, sortedByPrice } = useSortByPrice(
    dreams || []
  );
  const { isDescSortByTime, setIsDescSortByTime, sortedByTime } = useSortByTime(
    dreams || []
  );
  const [sort, setSort] = useState('name')

  const [searchDream, setSearchDream] = useState([])
  const [value, setValue] = useState('')

  const filtered = searchDream.filter(dream => {
    return dream.name.toLowerCase().includes(value.toLowerCase())
  })

  const sorted = () => {
    if (sort === 'name') {
      return(sortedByName &&
      sortedByName.map((dream) => <DreamItem  key={dream._id} {...dream} />))
    } else if (sort === 'price') {
      return(sortedByPrice &&
      sortedByPrice.map((dream) => <DreamItem  key={dream._id} {...dream} />))
    } else if (sort === 'time') {
      return(sortedByTime &&
        sortedByTime.map((dream) => <DreamItem  key={dream._id} {...dream} />))
    }  else if (sort === 'search') {
      return(
        filtered &&
        filtered.map((dream) => <DreamItem  key={dream._id} {...dream} />))
    } 
  }
 
  const ref = useRef();

  useEffect(() => {
    dispatch(getDreams()).then((dreams)=> {
      setSearchDream(dreams.payload);
      
    })
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      
      <ContentWrapper >
      
      </ContentWrapper>
      <StyledSort>
        <ContentWrapper className={styles.dreamsHeader}>
        <StyledInputSearch
					type="text"
					placeholder="Search"
					onChange={e => {setValue(e.target.value);setSort('search');}}
				/>
          <Button
            className={styles.sortBtn}
            onClick={() => {setIsDescSortByName(!isDescSortByName);setSort('name')}}
          >
            Sort by name {`${isDescSortByName ? "-" : "+"}`}
          </Button>
          <Button
            className={styles.sortBtn}
            onClick={() => {setIsDescSortByPrice(!isDescSortByPrice);setSort('price')}}
          >
            Sort by price {`${isDescSortByPrice ? "-" : "+"}`}
          </Button>
          <Button
            className={styles.sortBtn}
            onClick={() => {setIsDescSortByTime(!isDescSortByTime);setSort('time')}}
          >
            Sort by time {`${isDescSortByTime ? "-" : "+"}`}
          </Button>
          <Popup
        ref={ref}
        trigger={
          <StyledPopUp type="button" className="button">
            New Dream
          </StyledPopUp>
        }
      >
        <CreateDreamPage />
      </Popup>
        </ContentWrapper>
        {/* </div> */}
      </StyledSort>
      <ContentWrapper className={styles.dreamsGrid}>
      {/* <div> */}
        {sorted()}
      </ContentWrapper>
       
      
      {/* </div> */}
    </div>
  );
};