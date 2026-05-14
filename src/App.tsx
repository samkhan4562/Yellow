/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WeddingEvents } from './pages/WeddingEvents';
import { BanquetsVenues } from './pages/BanquetsVenues';
import { Gallery } from './pages/Gallery';
import { Services } from './pages/Services';
import { Reviews } from './pages/Reviews';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="weddings" element={<WeddingEvents />} />
          <Route path="venues" element={<BanquetsVenues />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

