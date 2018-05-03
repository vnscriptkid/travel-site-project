import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

let mobileMenu = new MobileMenu();
let revealOnScrollToFeatures = new RevealOnScroll($('.feature-item'), '85%');
let revealOnScrollToTestimonials = new RevealOnScroll($('.testimonial'), '60%');
