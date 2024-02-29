import Container from '@/components/ui/Container/Container';
import Brand from '@/components/views/Brand/Brand';
import Club from '@/components/views/Club/Club';
import Idea from '@/components/views/Idea/Idea';
import Main from '@/components/views/Main/Main';
import Products from '@/components/views/Products/Products';

export default function Home() {
	return (
		<>
			<Main />
			<Container>
				<Brand />
				<Products />
				<Idea />
			</Container>
			<Club />
		</>
	);
}
