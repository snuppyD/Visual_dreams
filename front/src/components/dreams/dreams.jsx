import React, { useEffect,useState, useRef,useContext } from "react";
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from "react-redux";
import { useSortByName,useSortByTime,useSortByPrice } from "../../hooks/useSortDreams";
import { getDreams } from "../../store/dreams/dreamsSlice";
import { Button } from "../button";
import { Text,LanguageContext} from '../../components/containers-language/language';
import { DreamItem } from "../dream-item";
import { Spinner } from "../spinner";
import styles from "./styles.module.css";
import { StyledSort,StyledPopUp,SettingsStled,DreamsGrid } from "../../styled/Dreams.styled";
import { StyledInputSearch } from "../../styled/CreateDreamPage.styled";
import { CreateDreamPage } from "../../pages/create-dream-page/create-dream-page";



export const Dreams = () => {
  const dispatch = useDispatch();
  const { dictionary } = useContext(LanguageContext);

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
      <StyledSort>
        <SettingsStled>
        <StyledInputSearch
					type="text"
					placeholder={dictionary.searchDream}
					onChange={e => {setValue(e.target.value);setSort('search');}}
				/>
          <Button
            className={styles.sortBtn}
            onClick={() => {setIsDescSortByName(!isDescSortByName);setSort('name')}}
          >
            <Text tid="sortByName" /> {`${isDescSortByName ? "-" : "+"}`}
          </Button>
          <Button
            className={styles.sortBtn}
            onClick={() => {setIsDescSortByPrice(!isDescSortByPrice);setSort('price')}}
          >
            <Text tid="sortByPrice" /> {`${isDescSortByPrice ? "-" : "+"}`}
          </Button>
          <Button
            className={styles.sortBtn}
            onClick={() => {setIsDescSortByTime(!isDescSortByTime);setSort('time')}}
          >
            <Text tid="sortByTime" /> {`${isDescSortByTime ? "-" : "+"}`}
          </Button>

          <Popup
        ref={ref}
        trigger={
          <StyledPopUp type="button" className="button">
            <Text tid="buttonCreate" />
          </StyledPopUp>
        }
      >
        <CreateDreamPage />
      </Popup>
        </SettingsStled>
      </StyledSort>
      <DreamsGrid>
        {sorted()}
      </DreamsGrid>
    </div>
  );
};