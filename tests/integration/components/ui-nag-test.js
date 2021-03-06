/* global stop, start */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-nag', 'Integration | Component | ui nag', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#ui-nag class="inline cookie"}}
      <span class="title">
        We use cookies to ensure you get the best experience on our website
      </span>
      <i class="close icon"></i>
    {{/ui-nag}}
  `);

  assert.equal(this.$('.ui.nag').length, 1);
});

test('it will only show once', function(assert) {
  assert.expect(4);

  var _this = this;

  this.render(hbs`
    {{#ui-nag class="inline cookie"}}
      <span class="title">
        We use cookies to ensure you get the best experience on our website
      </span>
      <i class="close icon"></i>
    {{/ui-nag}}
  `);

  assert.equal(this.$('.ui.nag').length, 1);
  this.$('.ui.nag').nag('clear');
  this.$('.ui.nag').nag('show');
  assert.equal(this.$('.ui.nag').css('display'), 'block');
  this.$('.ui.nag .close').click();

  stop();
  setTimeout(function() {
    start();

    assert.equal(_this.$('.ui.nag').css('display'), 'none');
    _this.$('.ui.nag').nag('show');
    assert.equal(_this.$('.ui.nag').css('display'), 'none');
  }, 1000);
});
