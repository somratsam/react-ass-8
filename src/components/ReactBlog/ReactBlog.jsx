import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const ReactBlog = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q. What is the difference between props vs useState</Accordion.Header>
                    <Accordion.Body>
                    <strong>props</strong> are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are used to establish communication between components, and they are essential for building reusable and modular components.
                    <strong>useState </strong> on the other hand, is a hook used to manage state within a component. State is data that can change over time and is specific to a component. State is used to store data that the component needs to render or to respond to user interactions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q. How does useState work?</Accordion.Header>
                    <Accordion.Body>
                    <strong>the useState</strong> hook is used to manage state within a component. The useState hook returns an array with two elements: the current state value and a function to update the state value.
                    When the component is mounted, the useState hook initializes the state value to initialState. When setStateValue is called with a new value, React schedules a re-render of the component with the updated state value.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q. What is the Purpose of useEffect other than fetching data</Accordion.Header>
                    <Accordion.Body>
                    <strong>The useEffect</strong> hook in ReactJS is used to handle side effects in functional components. While it is often used to fetch data, its purpose goes beyond that.useEffect is a versatile hook in ReactJS that can handle various side effects in functional components, not just fetching data. It can be used to update the document title, handle user input, clean up resources, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q. How Does React work?</Accordion.Header>
                    <Accordion.Body>
                    <strong>React</strong> is a JavaScript library for building user interfaces. It works by creating a virtual representation of the UI in memory, and then rendering that virtual representation to the browser's DOM.
                    React works by creating a virtual representation of the UI in memory, rendering it to the browser's DOM, and updating it efficiently as needed. React provides a way to handle user input, interact with a server, and manage state within a component.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default ReactBlog;