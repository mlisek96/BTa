import {ActionIcon, ScrollArea, Table, createStyles} from '@mantine/core';
import {IconX} from '@tabler/icons';
import {useState} from 'react';
import './TableEntertainmentTable.scss'

const expenses = [
    { id: 1, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 2, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 3, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 4, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 5, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 6, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 7, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
    { id: 8, iconCategory: 'home', amount: 123, description: 'biedronka zakupy' },
]

const useStyles = createStyles((theme) => ({
    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export function TableEntertainmentTable() {
    // const [classes, setClasses] = useState('TableEntertainmentTable-thead')
    // const [scrolled, setScrolled] = useState(false)
    //
    // const classScroll = () => {
    //     setClasses('TableEntertainmentTable-thead__scrolled')
    // }
    //
    // const handleScroll = () => {
    //     setScrolled(true)
    // }

    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);


    const rows = expenses.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.amount + ' zł'}</td>
            <td>{expense.description}</td>
            <td>
                <ActionIcon >
                    <IconX />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <ScrollArea style={{ height: 300 }} onScrollPositionChange={({y}) => setScrolled(y !== 0)}>
            <Table className='TableEntertainmentTable'>
                <thead className={cx('TableEntertainmentTable-thead', {[classes.scrolled]: scrolled})}>
                <tr>
                    <th>Amount</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}