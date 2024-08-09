
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons';

interface Props{
    platfroms: Platform[]
}


const PlatfromIconList = ( { platfroms }: Props) => {
    
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe 
    }

  return (
    <HStack marginY={'10px'}>
    {platfroms.map(platfrom => <Icon as={iconMap[platfrom.slug]} color = 'gray.500'/>)} 
    </HStack>
  )
}

export default PlatfromIconList