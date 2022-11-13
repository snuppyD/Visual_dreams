import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { useSortByName,useSortByTime,useSortByPrice, useSearchDream } from "../../hooks/useSortDreams";
import { paths } from "../../paths";
import { getDreams } from "../../store/dreams/dreamsSlice";
import { Button } from "../button";
import { ContentWrapper } from "../content-wrapper";
import { DreamItem } from "../dream-item";
import { Spinner } from "../spinner";
import styles from "./styles.module.css";
import { StyledSort,StyledLink } from "../../styled/Dreams.styled";

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
  const {searchedDreams,searchDream} = useSearchDream(dreams || [])

  const [sort, setSort] = useState('name')


  const sorted = () => {
    if (sort === 'name') {
      return(sortedByName &&
      sortedByName.map((dream) => <DreamItem key={dream._id} {...dream} />))
    } else if (sort === 'price') {
      return(sortedByPrice &&
      sortedByPrice.map((dream) => <DreamItem key={dream._id} {...dream} />))
    } else if (sort === 'time') {
      return(sortedByTime &&
        sortedByTime.map((dream) => <DreamItem key={dream._id} {...dream} />))
    }  else if (sort === 'search') {
      return(
        searchedDreams &&
        searchedDreams.map((dream) => <DreamItem key={dream._id} {...dream} />))
        
    } 
  }
  // useEffect(() => {
  //   Sorted();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[sort])

  useEffect(() => {
    dispatch(getDreams());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <StyledSort>
        <ContentWrapper className={styles.planesHeader}>
        <input
					type="text"
					placeholder="Search"
					onChange={e => {searchDream(e);setSort('search');}}
				/>
        {/* <div> */}
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
          <StyledLink to={ paths.createDream } >
            Add Dream
          </StyledLink>
        </ContentWrapper>
        {/* </div> */}
      </StyledSort>
      <ContentWrapper className={styles.planesGrid}>
      {/* <div> */}
        {sorted()}
      </ContentWrapper>
      {/* </div> */}
    </div>
  );
};
