import {useQuery} from "@apollo/client";
import GET_ASSIGNMENTS from "../lib/Queries/getAssigments";
import AuthContainer from "../compenents/Auth/AuthContainer";

export default function Home() {
  const AssQuery = useQuery(GET_ASSIGNMENTS);
  const { data, loading, error } = AssQuery;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // if (error) {
  //   console.error(error);
  //   return null;
  // }
  //
  // if (data){
  //   console.log(data)
  // }

  const { entries } = data;

  return (
    // <div>
    //   {entries.map((entry)=>(
    //       <div key={entry.id}>
    //        <h2>{entry.title}</h2>
    //       </div>
    //   ))}
    // </div>
      <>
       <AuthContainer/>
      </>
  );
}
