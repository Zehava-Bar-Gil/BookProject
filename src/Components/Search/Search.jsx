import React, {useState} from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './Search.css';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {InputGroup, Input, InputGroupAddon, Button, FormGroup, Label, Spinner}
from 'reactstrap';
import axios from 'axios'
import BookCard from '../Search/BookCard'


function Search() {
  // States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  //Handle Search
  const handleSubmit = ()=>{
    setLoading(true);
    if (maxResults > 40 || maxResults < 1){
      toast.error('max results must be between 1 and 40'); 
    } else{
       axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      ).then(res => {
        // console.log(res)
        if (startIndex >= res.data.totalItems || startIndex < 1){
          toast.error(`max results must be between 1 and ${res.data.totalItems}`
          );
        }else {
          if (res.data.items.length > 0){
            setCards(res.data.items)
            setLoading(false);
            
          }
        }
      })
      .catch(err => {
        setLoading(true)
        console.log(err.response);
        // toast.error(`${err.response.data.error.message}`)
      });
    }
  };

  //Main Show Case
  const mainHeader = () => { 
  return (
    <div className='main-image d-flex justify-content-center align-items-center flex-column'>
      {/* overlay */}
      <div className="filter"></div> 
      <h1 className='display-2 text-center text-white mb-3' style={{zIndex: 2}}> 
       Book Search
      </h1>
      <div style={ { width: '60%', zIndex: 2 } }>
        <InputGroup size='lg' className='mb-3'>
          <Input placeholder='Book Search'
          value={ query } 
          onChange={e=>setQuery(e.target.value)}/>
         <InputGroupAddon addonType='append'>
          <Button color='secondary' onClick={handleSubmit}>
          <BiSearchAlt size={40}/>
          </Button>
        </InputGroupAddon>
        </InputGroup>
        <div className="d-flex text-white justify-content-center">
          <FormGroup className='ml-5'>
            <Label className='inputLabel' for='maxResults'>Max Results</Label>
            <Input type='number' 
            id='maxResults' 
            placeholder='Max Results'
            value={ maxResults } 
            onChange={e=>setMaxResults(e.target.value)}
            />
          </FormGroup>
       
          <FormGroup className='ml-5'>
            <Label className='inputLabel' for='startIndex'>start Index</Label>
            <Input type='number' 
            id='startIndex' 
            placeholder='start Index'
            value={ startIndex } 
            onChange={e=>setStartIndex(e.target.value)}
            />
          </FormGroup>
              
        </div>
      </div>
    </div>
  );
};

const handleCards = () => {
  if (loading) {
    return (
      <div className='d-flex justify-content-center mt-3'>
        <Spinner style={{ width: '3rem', height: '3rem' }}/>
      </div>
    ); 
    }else {
      const items = cards.map((item, i) =>{
        let thumbnail = '';
        if(item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
    }
 
    return (
      <div className="col-lg-4 mb-3" key={ item.id }>
        <BookCard 
        thumbnail={thumbnail} 
        title={ item.volumeInfo.title }
        pageCount= {item.volumeInfo.pageCount}
        language= {item.volumeInfo.language}
        author= {item.volumeInfo.author}
        publisher= {item.volumeInfo.publisher}
        description= {item.volumeInfo.description}
        previewLink= {item.volumeInfo.previewLink}
        infoLink= {item.volumeInfo.infoLink}
        /> 
      </div>
    )
  })
   return (
      <div className='container my-5'>
        <div className='row'>{items}</div>
      </div>
    );
  }
};
return (
  <div className='w-100 h-100'>
    {mainHeader()}
    {handleCards()}
   <ToastContainer/>
  
  </div>
    
 );
}

export default Search;