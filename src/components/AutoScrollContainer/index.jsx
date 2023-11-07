import React, { useEffect, useRef, useState } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
// import { API_BASE_URL } from "../../config";
import "./index.css";
// import Placeholder from "../Placeholder";
// import useFetch from "../../hooks/useFetch";
// import { getMonthShortForm } from "../../utils/common";

// let eventObj = [
// 	{
// 		news_id: "26",
// 		title: "Event Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-14",
// 	},
// 	{
// 		news_id: "27",
// 		title: "Event Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-14",
// 	},
// ];

let newsObj = [
 {
  title: "News Heading",
  given_by: "Registrar",
  news_content:
   "Small <a href='www.google.com'>news</a> msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: "Registrar",
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: "Registrar",
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: "Registrar",
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: "Registrar",
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: "Registrar",
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: null,
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: null,
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: null,
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: null,
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "News Heading",
  given_by: null,
  news_content: "Small news msg instead of long one",
  start_date: "2022-02-05",
  end_date: "2022-02-10",
  file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
 },
 {
  title: "New Title",
  given_by: "Dr.Sathiyamurthy ",
  news_content: "qqq",
  start_date: "2022-02-09",
  end_date: "2022-02-12",
  file_name: null,
 },
 {
  title: "New Title",
  given_by: "Dr.Sathiyamurthy ",
  news_content: "qwert",
  start_date: "2022-02-09",
  end_date: "2022-02-11",
  file_name: null,
 },
 {
  title: "test",
  given_by: "HOD CSE",
  news_content: "test_content",
  start_date: "2022-02-03",
  end_date: "2022-03-03",
  file_name: null,
 },
 {
  title: "Last title",
  given_by: "HOD CSE",
  news_content: "test_content",
  start_date: "2022-02-03",
  end_date: "2022-03-03",
  file_name: null,
 },
];

export function AutoScrollContainer(props) {
 const { title, data, children } = props;
 const updatesContainerRef = useRef();
 const updateRef = useRef();

 const [animationStatus, setAnimationStatus] = useState("play");
 const [scrollHeight, setScrollHeight] = useState(0);

 useEffect(() => {
  const element = updatesContainerRef.current;

  // calculating the scroll height without the styles
  // because by default the style is overflow hidden
  // with scroll value only we can calculate
  updateRef.current?.classList.remove("updates");
  // element?.classList.remove("updates-container--animation");

  if (!(element?.scrollHeight > element?.clientHeight)) {
   return;
  }

  // element?.classList.add("updates-container--animation");
  updateRef.current?.classList.add("updates");

  let totalScrollHeight = element?.scrollHeight - element?.clientHeight;
  setScrollHeight(totalScrollHeight);
 }, [updatesContainerRef, updateRef]);

 useEffect(() => {
  const element = updatesContainerRef.current;
  if (!element || scrollHeight <= 0) return;

  let containerIntervalId = null;
  let containerTimeoutId = null;
  let totalHeightScrolled = 0;

  function handleOnScroll() {
   clearInterval(containerIntervalId);
   clearTimeout(containerTimeoutId);

   // updating the element scrolling position
   totalHeightScrolled = element.scrollTop;

   if (animationStatus === "play") {
    containerTimeoutId = setTimeout(() => {
     clearInterval(containerIntervalId);
     containerIntervalId = setInterval(() => {
      if (totalHeightScrolled <= scrollHeight) {
       totalHeightScrolled += 110;
      } else {
       totalHeightScrolled = 110;
       element.scroll(0, 0);
      }
      element.scrollBy(0, 110);
     }, 600);
    }, 700);
   }
  }

  if (animationStatus === "play") {
   containerIntervalId = setInterval(() => {
    if (totalHeightScrolled <= scrollHeight) {
     totalHeightScrolled += 110;
    } else {
     totalHeightScrolled = 110;
     element.scroll(0, 0);
    }
    element.scrollBy(0, 110);
   }, 600);
  } else {
   clearInterval(containerIntervalId);
   clearTimeout(containerTimeoutId);
  }

  element.addEventListener("scroll", handleOnScroll);

  return () => {
   clearInterval(containerIntervalId);
   clearTimeout(containerTimeoutId);
   element.removeEventListener("scroll", handleOnScroll);
  };
 }, [updatesContainerRef, scrollHeight, animationStatus]);

 useEffect(() => {
  const updatesContainer = updatesContainerRef.current;

  function handleResize() {
   // recalculating the scroll height without the styles
   updateRef.current?.classList.remove("updates");

   setScrollHeight(
    updatesContainer?.scrollHeight - updatesContainer?.clientHeight
   );

   updateRef.current?.classList.add("updates");
  }

  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, [updatesContainerRef, updateRef]);

 const toggleAnimationStatus = () => {
  setAnimationStatus(animationStatus === "play" ? "pause" : "play");
 };

 const handleOnMouseEnter = () => {
  // setAnimationStatus("pause");
 };

 const handleOnMouseLeave = () => {
  // setAnimationStatus("play");
 };

 return (
  <div className="news-ptu-part">
   <div className="news-ptu-part__head">
    <h2>{title}</h2>
    {scrollHeight > 0 && (
     <button
      className="news-ptu-part__head-control"
      onClick={toggleAnimationStatus}
     >
      {animationStatus === "play" ? <IoMdPause /> : <IoMdPlay />}
     </button>
    )}
   </div>

   <div
    ref={updatesContainerRef}
    onMouseEnter={handleOnMouseEnter}
    onMouseLeave={handleOnMouseLeave}
    className={`updates-container hide-scrollbar`}
   >
    <div ref={updateRef} className={`${scrollHeight > 0 ? "updates" : ""}`}>
     {data.map((...rest) => children(...rest, setAnimationStatus))}
    </div>
   </div>
  </div>
 );
}

export function NoticesAndUpdates() {
 const allResponse = useFetch("News_Event.php?visiblity=all&content=notices");

 const mainResponse = useFetch(
  "News_Event.php?visiblity=main&content=notices"
 );

 let { error: allError, data: allData } = allResponse;
 let { error: mainError, data: mainData } = mainResponse;

 const error = allError || mainError;
 const isLoding = !allData && !mainData;

 let data = [];
 if (!isLoding) {
  if (allData) {
   data = data.concat(allData);
  }
  if (mainData) {
   data = data.concat(mainData);
  }
 }

 if (error || isLoding || data.length === 0) {
  return (
   <div className="news-ptu-part">
    <div className="news-ptu-part__head">
     <h2>Notices and Updates</h2>
    </div>

    {error ? (
     <div className="updates-container hide-scrollbar updates-error-container">
      <h2>Something went wrong</h2>
     </div>
    ) : isLoding ? (
     <div className="updates-container hide-scrollbar">
      <div className="updates-placeholder-container">
       <Placeholder className="updates-topic-placeholder" />
       <Placeholder className="updates-bywhom-placeholder" />
       <Placeholder className="updates-message-line1-placeholder" />
       <Placeholder className="updates-message-line2-placeholder" />
      </div>
      <div className="updates-placeholder-container">
       <Placeholder className="updates-topic-placeholder" />
       <Placeholder className="updates-bywhom-placeholder" />
       <Placeholder className="updates-message-line1-placeholder" />
       <Placeholder className="updates-message-line1-placeholder" />
       <Placeholder className="updates-message-line2-placeholder" />
      </div>
     </div>
    ) : data.length === 0 ? (
     <div className="updates-container hide-scrollbar updates-empty-container">
      <h2>No Notices and Updates</h2>
     </div>
    ) : null}
   </div>
  );
 }

 return (
  <AutoScrollContainer title="Notices and Updates" data={data}>
   {(e, i) => {
    return (
     <Updated
      key={i}
      topic={e.title}
      byWhom={e.given_by}
      message={e.news_content}
      file_name={e.file_name}
     />
    );
   }}
  </AutoScrollContainer>
 );
}

export function Events() {
 const allResponse = useFetch("News_Event.php?visiblity=all&content=events");

 const mainResponse = useFetch("News_Event.php?visiblity=main&content=events");

 let { error: allError, data: allData } = allResponse;
 let { error: mainError, data: mainData } = mainResponse;

 const error = allError || mainError;
 const isLoding = !allData && !mainData;

 let data = [];
 if (!isLoding) {
  if (allData) {
   data = data.concat(allData);
  }
  if (mainData) {
   data = data.concat(mainData);
  }
 }

 if (error || isLoding || data.length === 0) {
  return (
   <div className="news-ptu-part">
    <div className="news-ptu-part__head">
     <h2>Upcoming Events</h2>
    </div>

    {error ? (
     <div className="updates-container hide-scrollbar updates-error-container">
      <h2>Something went wrong</h2>
     </div>
    ) : isLoding ? (
     <div className="updates-container hide-scrollbar">
      <div className="event__container event__container--placeholder">
       <Placeholder className="event__box-card event__box-card-placeholder" />
       <div className="event__description event__description--placeholder">
        <div>
         <Placeholder className="updates-message-line1-placeholder" />
         <Placeholder className="updates-message-line1-placeholder" />
         <Placeholder className="updates-message-line2-placeholder" />
        </div>
       </div>
      </div>
      <div className="event__container event__container--placeholder">
       <Placeholder className="event__box-card event__box-card-placeholder" />
       <div className="event__description event__description--placeholder">
        <div>
         <Placeholder className="updates-message-line1-placeholder" />
         <Placeholder className="updates-message-line1-placeholder" />
         <Placeholder className="updates-message-line2-placeholder" />
        </div>
       </div>
      </div>
      <div className="event__container event__container--placeholder">
       <Placeholder className="event__box-card event__box-card-placeholder" />
       <div className="event__description event__description--placeholder">
        <div>
         <Placeholder className="updates-message-line1-placeholder" />
         <Placeholder className="updates-message-line1-placeholder" />
         <Placeholder className="updates-message-line2-placeholder" />
        </div>
       </div>
      </div>
     </div>
    ) : data.length === 0 ? (
     <div className="updates-container hide-scrollbar updates-empty-container">
      <h2>No Events</h2>
     </div>
    ) : null}
   </div>
  );
 }

 return (
  <AutoScrollContainer title="Upcoming Events" data={data}>
   {(e, i) => {
    const date = new Date(e.start_date);
    return (
     <Event
      key={i}
      topic={e.title}
      message={e.news_content}
      date={date.getDate()}
      month={getMonthShortForm(date.getMonth())}
     />
    );
   }}
  </AutoScrollContainer>
 );
}

export default function NewsPTU() {
 return (
  <div className="news-ptu__container">
   <NoticesAndUpdates />
   <Events />
  </div>
 );
}

export const Updated = ({ topic, byWhom, message, file_name }) => {
 return (
  <div className="update__container">
   <div className="update__content">
    <h2
     dangerouslySetInnerHTML={{ __html: topic }}
     className="updates__description-text"
    />
    <div className="update__newss">
     <h3>{byWhom}</h3>
     <br />
     <p
      dangerouslySetInnerHTML={{ __html: message }}
      className="updates__description-text"
     />
     <p>
      {file_name && (
       <a
        className="update__view-more-btn"
        href={API_BASE_URL + file_name}
        target="_blank"
        rel="noreferrer"
       >
        View More
       </a>
      )}
     </p>
    </div>
   </div>
   <hr />
  </div>
 );
};

const Event = ({ date, month, topic, message }) => {
 return (
  <div className="event__container">
   <div className="event__box-card">
    <div className="event__date">
     <h4 className="event__date-text">
      {date} <br /> {month}
     </h4>
    </div>
   </div>
   <div className="event__description">
    <div>
     <p
      dangerouslySetInnerHTML={{ __html: topic }}
      className="event__description-text"
     />
     <p
      dangerouslySetInnerHTML={{ __html: message }}
      className="event__description-text"
     />
    </div>
   </div>
  </div>
 );
};
