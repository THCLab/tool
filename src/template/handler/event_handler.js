import Vue from 'vue';

var EventHandlerConstant = {
    REMOVE_CONTROL: 'remove_control',

    EXPORT_FORM: 'export_form',
    FORM_RENDERED: 'form_rendered',
    // sidebar
    ACTIVATE_EDITOR_SIDEBAR: 'activate_editor_sidebar',
    ON_APPLY_EDITOR_SIDEBAR: 'on_apply_editor_sidebar',
};

// to receive event and pass...
const eventBus = new Vue();

export {
    EventHandlerConstant,
    eventBus
}
