import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

test('Should render Counter component',()=>{
    render(<Counter/>)
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent('1');
});

test("increment button is clicked and value increments by 1",()=>{
    render(<Counter/>);
    let increment = screen.getByTestId("counter");
    userEvent.click(screen.getByRole('button',{name:'+'}));
    expect(increment).toHaveTextContent("2");
});

test("decrement button is clicked and value decrements by 1",()=>{
    render(<Counter/>);
    let decrement = screen.getByTestId("counter");
    userEvent.click(screen.getByRole('button',{name:'-'}));
    expect(decrement).toHaveTextContent("1");
});

test('decrement should not less than 0',()=>{
    render(<Counter/>);
    let dec = screen.getByTestId('counter');
    expect(dec).toHaveTextContent('1')
    userEvent.click(screen.getByRole('button',{name:'-'}));
    expect(dec).toHaveTextContent('1')
})