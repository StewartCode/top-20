import React from 'react';

const DisplayData = ({data}) => {
  if(!data.feed){
    return null;
  }

const iterate = data.feed.entry.map((song, index) => {
   return <li value={index + 1} key={index}>{song.title.label}</li>
})


  return(
    <div className="list_stuff">
    {console.log('this is at Display Data', data.feed.entry[0].title.label)}
    <ol>
         {iterate}
    </ol>
    </div>
  )
}




export default DisplayData;
