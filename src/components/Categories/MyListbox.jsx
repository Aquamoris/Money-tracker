import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

function MyListBox(props) {
    let expenseCategories = props.expenseCategories;
    let incomeCategories = props.incomeCategories;

    console.log(expenseCategories);
    console.log(incomeCategories);

    const [selectedPerson, setSelectedPerson] = useState('Админ');

    return (
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>{expenseCategories.name}</Listbox.Button>
            <Listbox.Options>
                
            </Listbox.Options>
        </Listbox>
    )
}

export default MyListBox;