import Cookies from 'js-cookie';
const parks = [
  'Walt Disney World Resort - Orlando, Florida',
  'Disneyland Resort - Anaheim, California ',
  'Tokyo Disney Resort - Tokyo, Japan',
  'Disneyland Paris - Marne-la-Vallée, France',
  'Hong Kong Disneyland Resort - Lantau Island',
  'Shanghai Disney Resort - Pudong, Shanghai '
];

export default function ParkSelector({ id }: {id: string }) {
  return <select name="favePark" id={id} defaultValue={Cookies.get('favePark') || ''}>
    <option value="">Select a Disney Park</option>
    { parks.map(park => <option key={park} defaultValue={park}>{park}</option>) }
  </select>
}