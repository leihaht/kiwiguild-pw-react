import React from 'react';
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
//import { footer } from '../styles/footer.scss';
//import Routes from '../routes';

const API = 'http://localhost/processwire-test/api/test'

const DEFAULT_QUERY = {
    //method : 'POST',
};


const withFetching = (url, query) => (Comp) =>
    class WithFetching extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: {},
                isLoading: false,
                error: null,
            };
        }

        componentDidMount() {
            this.setState({isLoading: true});

            fetch(url, query)
                .then(response => {
                    //Unfortunately, the native fetch API doesn’t use its catch block
                    //for every erroneous status code.
                    //For instance, when a HTTP 404 happens, it wouldn’t run into the catch block.
                    //But you can force it to run into the catch block by throwing an error
                    //when your response doesn’t match your expected data.
                    if (response.ok) {
                        //console.log(response);
                        return response.json();
                    } else {
                        //console.log(response);
                        throw new Error('Something went wrong ...');
                    }
                }).then(data => {
                    console.log('parsed json', data);
                    this.setState({ data, isLoading: false });
                }).catch(error => {
                    console.log('parsing failed', error);
                    this.setState({ error, isLoading: false });
                });
        }

        render() {
            return <Comp { ...this.props } { ...this.state } />
        }
    }

const FetchDemo = ({ data, isLoading, error }) => {
    const hits = data.hits || [];

    if (error) {
        return <p>{error.message}</p>;
    }
    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <div>
            {hits.map(hit =>
                <div key={hit.objectID}>
                    <a herf={hit.url}>{hit.title}</a>
                </div>
            )}
        </div>
    );
}

const AppWithFetch = withFetching(API, DEFAULT_QUERY)(FetchDemo);


export default AppWithFetch;
