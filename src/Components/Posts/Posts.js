import React,{useEffect,useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Heart from '../../assets/Heart';
import './Post.css';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

function Posts() {

  const {firebase} = useContext(FirebaseContext)
  const {setPostDetails} = useContext(PostContext)

  const [products,setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      setProducts(allPost)
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
      
      <div className="cards">
        {products.map(products=>{
          return(
            <div className="card"
            onClick={()=>{
              setPostDetails(products)
              navigate('/view')
            }}
            >
                <div className="favorite">
                    <Heart></Heart>
                </div>
                <div className="image">
                    <img src={products.url} alt="" />
                </div>
                <div className="content">
                    <p className="rate">&#x20B9; {products.price}</p>
                    <span className="kilometer">{products.category}</span>
                    <p className="name">{products.name}</p>
                </div>
                <div className="date">
                    <span>{products.createdAt}</span>
                </div>
            </div>
          )
          })
        }
      </div>
        
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">


        {products.map(products=>{
          return(
            <div className="card"
            onClick={()=>{
              setPostDetails(products)
              navigate('/view')
            }}
            >
                <div className="favorite">
                    <Heart></Heart>
                </div>
                <div className="image">
                    <img src={products.url} alt="" />
                </div>
                <div className="content">
                    <p className="rate">&#x20B9; {products.price}</p>
                    <span className="kilometer">{products.category}</span>
                    <p className="name">{products.name}</p>
                </div>
                <div className="date">
                    <span>{products.createdAt}</span>
                </div>
            </div>
          )
          })
        }
        
        
        </div>
      </div>
    </div>
  );
}

export default Posts;
