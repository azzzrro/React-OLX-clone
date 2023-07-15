import React,{useEffect,useState,useContext} from 'react';

import './View.css';
import Post, { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {

  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext) 
  const {firebase} = useContext(FirebaseContext) 

  useEffect(() => {
    const { userId } = postDetails;
    console.log(userId, "user");
    firebase
      .firestore()
      .collection('users')
      .where('id', '==', userId)
      .get()
      .then((res) => {
        if (res.empty) {
          console.log('No matching documents found');
        } else {
          res.forEach((doc) => {
            setUserDetails(doc.data());
            console.log(doc.data(), 'dataaa');
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
      {userDetails && (<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        )}
      </div>
    </div>
  );
}
export default View;
