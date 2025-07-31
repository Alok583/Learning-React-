import './netflix-index.css';
import { NetflixHeader } from './netflix-header';
import { NetflixSection } from './netflix-section';
export default function NetflixIndex(){
    return (
        <div className="banner">
            <div className="shades">
                <NetflixHeader />
                <NetflixSection />
            </div>
        </div>
    )
}