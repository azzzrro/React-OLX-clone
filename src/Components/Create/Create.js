import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {AuthContext,FirebaseContext} from '../../store/Context'
import {useNavigate} from 'react-router-dom'

const Create = () => {

  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()
  
  const [name,setName]= useState('')
  const [category,setCategory]= useState('')
  const [price,setPrice]= useState('')
  const [image,setImage]= useState(null)

  const date = new Date()

  const handleSubmit = ()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        navigate('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(event)=>{
                setName(event.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(event)=>{
                setCategory(event.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" 
            type="number" 
            id="fname"
            name="Price"
            value={price} 
              onChange={(event)=>{
                setPrice(event.target.value)
              }}
            />
            <br />
          
          <br />
          {image && 
          <img alt="" width="200px" height="200px" src={image? URL.createObjectURL(image):"" }></img>
          }
          
            <br />
            <input onChange={(event)=>{
              setImage(event.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
