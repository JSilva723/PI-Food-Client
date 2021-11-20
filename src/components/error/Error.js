import { useSelector } from "react-redux";

export const Error = () => {
  
  const error = useSelector((state) => state.error);
  
  return(
    <div style={{
      backgroundColor: 'lightgrey',
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <p style={{color: 'red', margin: '0'}}>{error}</p>
    </div>
  );
};