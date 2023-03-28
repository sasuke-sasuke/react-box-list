import { screen, render, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList />);
})

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

// it('adds a box to the page', () => {
//     const {getByLabelText, queryByText, queryByDisplayValue} = render(<BoxList />);
//     const colorInput = getByLabelText('Color');
//     const heightInput = getByLabelText('Height');
//     const widthInput = getByLabelText('Width');
//     fireEvent.change(colorInput, {target: {value: 'blue'}});
//     fireEvent.change(heightInput, {target: {value: '100px'}});
//     fireEvent.change(widthInput, {target: {value: '100px'}});
//     fireEvent.click(queryByText('Add "Square-tangle"'));
//     expect(queryByDisplayValue(colorInput.value)).toBeInTheDocument();

// })