import React from 'react';
import { Container } from 'reactstrap';

import nl2br from '../lib/react-nl2br';

const test_string = 'testing line\nsecond line\n\ndouble line\n\n';

const Home = () => {
    return (
        <Container>
            <h2>
                홈
            </h2>
            {
                test_string.trim().split('\n\n').map( (line, index) => {
                    return <p key={index}>{nl2br(line.trim())}</p>
                })
            }
        </Container>
    );
};

export default Home;
