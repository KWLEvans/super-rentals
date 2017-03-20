import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set("updateAnnouncementForm", true);
    },
    update(announcement) {
      var params = {
        title: this.get('title'),
        timestamp: moment().format('LLLL'),
        content: this.get('content'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcement, params);
    },
  }
});
