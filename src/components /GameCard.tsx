import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatfromIconList from './PlatfromIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';


interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => { 
  return (
   <Card>
        <Image src={getCroppedImageUrl(game.background_image)} /> 
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
            <PlatfromIconList platfroms={game.parent_platforms.map(p => p.platform)}></PlatfromIconList>  
            <CriticScore score={game.metacritic}></CriticScore>          
            </HStack>       
        </CardBody>
    </Card>
  )
}

export default GameCard