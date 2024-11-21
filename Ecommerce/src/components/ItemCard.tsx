import { Box, Card, CardContent, Typography } from "@mui/material"
import Item from "../entities/Item"

interface Props {
    item: Item
}

const ItemCard = ({ item }: Props) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant='outlined'>
                <CardContent >
                    <Typography>
                        {item.name}
                    </Typography>
                    <Typography>
                        {item.description}
                    </Typography>
                    <Typography>
                        {item.price}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ItemCard