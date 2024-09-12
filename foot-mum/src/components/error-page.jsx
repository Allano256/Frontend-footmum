import {useRouteError} from "react-router-dom";


export default function ErrorPage(){
    const error= useRouteError();
    console.log(error);

    return (
        <div>
          <h1>Sorry!!!</h1>
          <p>An unexpected error occured!</p>
          <p>
            <i>{ error.statusText || error.message}</i>
          </p>

        </div>
    );

}

