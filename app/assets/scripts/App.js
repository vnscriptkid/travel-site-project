import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

let mobileMenu = new MobileMenu();
let revealOnScrollToFeatures = new RevealOnScroll($('.feature-item'), '85%');
let revealOnScrollToTestimonials = new RevealOnScroll($('.testimonial'), '60%');
let stickyHeader = new StickyHeader();
