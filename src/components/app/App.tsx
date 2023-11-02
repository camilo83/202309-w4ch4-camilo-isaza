import { Actions } from '../actions/actions';
import { Info } from '../info/info';
import { Keyboard } from '../keyboard/keyboard';

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
