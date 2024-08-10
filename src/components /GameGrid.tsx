import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


function GameGrid() {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:5}} spacing={10} padding='10px'>
        {isLoading && skeletons.map(skeleton =><GameCardContainer>
          <GameCardSkeleton key={skeleton}/>
        </GameCardContainer> )}
        {games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid