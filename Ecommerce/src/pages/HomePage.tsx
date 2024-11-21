import { Button } from '@mui/material';
import CompanyCard from '../components/CompanyCard';
import useCompanies from '../hooks/useCompanies';

const HomePage = () => {
    const { data, isLoading, error } = useCompanies();

    function handleClick() {

        console.log(data);
    }

    if (error) return null;
    if (isLoading) return <p>Loading...</p>

    return (
        <>
            {
                data?.map(company => <CompanyCard key={company.id} company={company} />)
            }


            <Button variant='outlined' onClick={() => handleClick()}>Hello World</Button>
        </>
    )
}

export default HomePage