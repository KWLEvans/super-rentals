import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAnnouncement(announcement) {
      if (confirm("For reals?")) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
