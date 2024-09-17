import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
// import CustomToast from '../toast/toast';
import InstagramHeart from './animated';
import InifiniteLoader from '../spinner/spinner';
import CustomDNALoader from '../loarder/loader';
import Example from '../tasks/shimmer';
import { AiFillAmazonCircle } from "react-icons/ai";


function Basic({title,text, removeHandler,ind}) {
  return (
    <Card style={{width:300}}>
     
      <Card.Body>
     
        <Card.Title> {title} </Card.Title>
        <Card.Title> {text} </Card.Title>
       
<Example/>
< AiFillAmazonCircle size={100} />
        <CustomDNALoader/>
        {/* <InifiniteLoader color={'red'}/> */}
        {/* <CustomToast message={'i am card'}/> */}
        <InstagramHeart/>
       
        <Button variant="primary" onClick={() =>removeHandler(ind)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Basic;