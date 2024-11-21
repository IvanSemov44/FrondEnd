import { Box, Card, CardContent, Typography } from '@mui/material';
import Company from '../entities/Company';

interface Props {
    company: Company;
}

const CompanyCard = ({ company }: Props) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant='outlined'>
                <CardContent >
                    <Typography>
                        {company.name}
                    </Typography>
                    <Typography>
                        {company.fullAddress}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CompanyCard