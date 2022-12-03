import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsive";
import { useHistory } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";
import Message from '../../components/starRating/Message'
const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const Footer2 = styled.div`
position:absolute;

width:100%;
height:60px;            
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

const quantity = useSelector(state=>state.cart.quantity)
const cart = useSelector((state) => state.cart);
const user = useSelector((state) => state.user.currentUser);

const history = useHistory();
const placeOrderHandler =() => {
  history.push("/shipping")
};


 
  return (
    <>
    <Navbar2/>
      <Navbar/>
    <Container>
      <Wrapper>
      
        <Top>
        
        <Link>
          <a className='link' href='/products'>
            <TopButton >CONTINUE SHOPPING</TopButton>
          </a>
        </Link>
          <TopTexts>
            <TopText>Shopping Bag ({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {user ? 
          (
            (
            <TopButton type="submit" onClick={placeOrderHandler}>CHECKOUT NOW</TopButton>
            )
          ) : 
          (
            (
              <>
              <a className='link' href='/login'>
                <TopButton type="submit">CHECKOUT NOW</TopButton>
              </a>
              </>
            )
          )}
          
          
        </Top>
        {user ? (<br/>):
        (<Message>Please sign in to CHECKOUT</Message>)
         }
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
    
                    <ProductSize>
                      <b>weight:</b> {product.weight} Kg
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>

        </Bottom>
      </Wrapper>
      <Footer2>
        <Footer />
      </Footer2>
    </Container>
    </>
  );
};

export default Cart;
