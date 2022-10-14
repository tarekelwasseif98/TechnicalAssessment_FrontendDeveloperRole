import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './components/Card/Card';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import CardSkeleton from './components/Card/CardSkeleton';

function App() {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const getData=()=>{
    fetch('posts.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();
    setIsLoading(false);
  },[])

  let posts = data.posts?.map((post)=>{
    return (
        {post}
    )
})

  return (
    <div className="App">
      <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
        <h1>
          RSS Feed Application
        </h1>
        {isLoading && <CardSkeleton cards={8}/>}
        <div>
          <Card posts={posts}/>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default App;