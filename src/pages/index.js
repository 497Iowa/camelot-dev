import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
      document.body.parentElement.style.overflowY = "hidden";
    }, []);

    const images = [
        {
          name: "Default",
          url: "wp.jpg"
        },
        {
          name: "Reddify",
          url: "reddify.jpg"
        },
    ]

    const toggleImg = (e) => {
        setIndex(1-index);
      }

    function TryMe(props) {
        return (
          <button 
            class="button has-text-centered is-warning is-rounded" 
            onClick={props.toggle}
          >
            Try Me!
          </button>
        );
    }

return (
    <div class="column">
        <h1 class="title has-text-centered">
            Welcome to Camelot
        </h1>
        <h2 class="subtitle has-text-centered">
            A photo editing and educational programming platform!
        </h2>
    <div class="columns is-mobile is-centered is-vcentered">
      <div class="column is-half">
        <figure class="image is-5by3">
            <img src={images[index].url} alt="Description"/>
        </figure>
      </div>
      <div class="column is-half">
        <figure class="image">
            <img src="filter.jpg" alt="Description"/>
        </figure>
        <br/>
        <div class="box has-text-centered is-shadowless">
            <TryMe toggle={(e) => toggleImg(e)}/>
            <h3 class="subtitle has-text-centered">
                Click here to apply the filter <br/>
                Click again to reset the image
            </h3>
        </div>
      </div>
    </div>
    <div class="box has-text-centered is-shadowless">
        <button 
            class="button is-medium is-success is-rounded"
            onClick={() => navigate("/create")}
        >
            Let's Get Started!
        </button>
    </div>
    </div>
	// <div class="hero-body">
    //         <div class="container has-text-centered">
    //             <div class="columns is-vcentered">
    //                 <div class="column is-6">
                        
    //                     <figure class="image is-2by1">
    //                         <img src="filter.jpg" alt="Description"/>
    //                     </figure>
    //                     <TryMe toggle={(e) => toggleImg(e)}/>

    //                 </div>
    //                 <div class="column is-5 is-offset-1">
    //                     <h1 class="title is-2">
    //                         Welcome to Camelot
    //                     </h1>
    //                     <h2 class="subtitle is-4">
    //                         A photo editing and educational programming platform!
    //                     </h2>
    //                     <br/>
    //                     {/* <p class="has-text-centered">
    //                         <a class="button is-medium is-info is-outlined">
    //                             Learn more
    //                         </a>
    //                     </p> */}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
);
};

export default Home;

