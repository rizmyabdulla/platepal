// hash Finder

/**
 * Changes the hash of the window location to the specified page name.
 *
 * @param {string} pageId - The id of the page to navigate to.
 * @param {Function} callback - Optional callback function to be executed after changing the hash.
 * @returns {void}
 */
function changeHash(pageId, callback) {
  var currentHash = window.location.hash;
  window.location.hash = pageId;
  if (callback && typeof callback === "function") {
    callback(currentHash);
  }
}

// Intersection Observer

const IntersectionObserverUtil = {
  /**
   * Initializes the observer for elements matching the given selector.
   *
   * @param {string} selector - The CSS selector used to select the elements.
   * @param {function} callback - The callback function to be called when an element is intersecting.
   */

  init: function (selector, callback) {
    const elements = document.querySelectorAll(selector);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target.id);
        } else {
          callback("#");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    elements.forEach((element) => {
      observer.observe(element);
    });
  },
};
