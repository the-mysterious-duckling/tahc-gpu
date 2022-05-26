import React from 'react';

const Blogs = () => {
    return (
        <>
            <h1 className='text-center text-3xl my-2'>Some Q/A</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 px-8'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-secondary font-bold mx-auto">How will you improve the performance of a React Application?</h2>
                        <p className='text-center'>Writing good code that boosts performance. Not downloading dependencies what we don't need. For example: This website uses react-icons instead of hero-icons by tailwind because hero icons loads all the icons which costs around 30 kilo bytes of extra workload.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-secondary font-bold mx-auto">What are the different ways to manage a state in a React application?</h2>
                        <p className='text-center'>There are four main types of states to properly manage in React apps. They are: local state, global state, server state, url state
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-secondary font-bold mx-auto">How does prototypical inheritance work?</h2>
                        <p className='text-center'>Simply put, the prototypical inheritance is a method in JavaScript which allows an object to use the set of rules or properties of another Object</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-secondary font-bold mx-auto">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p className='text-center'>It allows us to change the data with ease, boosts performance and provides many other benefits.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-secondary font-bold mx-auto">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p className='text-center'>It depends on where the data needs to be extracted from, If it's required to be shown in client-side just destructure the name as a single variable to get the name. If the data is to be calculated with in the server operations like findOne('query') from mongoDB, can be used</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-secondary font-bold mx-auto">What is a unit test? Why should write unit tests?</h2>
                        <p className='text-center'>A unit test is just a fancy way of saying to test an application if it works or not. We should write units tests so that it is ensured that everything works as it was intended </p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Blogs;