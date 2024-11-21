import { Button } from '@mui/material';
import ItemCard from '../components/ItemCard';
import useItems from '../hooks/useItems';

const CatalogPage = () => {
    const { data, isLoading, error } = useItems();

    function handleClick() {

        console.log(data);
    }

    if (error) return null;

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            {
                data?.map(item => <ItemCard key={item.id} item={item} />)
            }

            <Button variant='outlined' onClick={() => handleClick()}>Hello World</Button>
        </>
    )
}

export default CatalogPage