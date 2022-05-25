import { shallowMount, mount } from "@vue/test-utils";
import ContactForm from "@/components/ContactForm.vue";

test("Input test", async () => {
    const wrapper = mount(ContactForm);
    const input = wrapper.find("input");

    await input.setValue("benj091d@edu.ucl.dk");

    expect(input.element.value).toBe("benj091d@edu.ucl.dk");
});
