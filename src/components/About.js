function About(props) {
 
    
  return (
   <aside>
    <img src={props.image || "https://via.placeholder.com/215" } alt="blog logo"></img>
    <p>{props.aboutText}</p>
   </aside>
  )
}
  
  export default About;