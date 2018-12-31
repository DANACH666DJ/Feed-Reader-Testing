/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', () => {
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('urls of object allFeeds should be defined and not be empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
    
        it('names of object allFeeds should be defined and not be empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
        it('the menu should be hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('the menu should change its hidden status when the menu icon is clicked', () => {
            $('a.menu-icon-link').trigger('click'); // first click
            expect($('body').hasClass('menu-hidden')).toBe(false); // The body element should not contain the menu-hidden class after the first click
            $('a.menu-icon-link').trigger('click'); // second click
            expect($('body').hasClass('menu-hidden')).toBe(true); // after the second click the body should contain the menu-hidden class again
        });
    });

    describe('Initial Entries', () => {
        beforeEach(done => loadFeed(0, done));

        it('should have at least a single .entry element within the .feed containe', () => {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

   });

   describe('New Feed Selection', () => {
       // store de old feed
        var old;

        beforeEach((done) => {
            loadFeed(0, () => {
                // here we store the old Feed
                old = $('.feed').html();
                // look for new Feed
                loadFeed(1, done);
            });
        });

        it('the new Feed one should be different from the old', () => {
            expect($('.feed').html()).not.toBe(old);
        });
    });
        
}());
