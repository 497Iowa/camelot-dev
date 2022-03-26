import React from 'react';

const Home = () => {
return (
	<div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            Welcome to Camelot
                        </h1>
                        <h2 class="subtitle is-4">
                            A photo editing and educational programming platform!
                        </h2>
                        <br/>
                        {/* <p class="has-text-centered">
                            <a class="button is-medium is-info is-outlined">
                                Learn more
                            </a>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
);
};

export default Home;

