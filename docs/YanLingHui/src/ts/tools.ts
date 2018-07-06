import * as $ from "jquery";
import { NullableString } from "./template";

/**initalize your mobile project and set defualt parameters for it.  */

export function hello(str: string) {
        alert(str);
}
/**HTML页面跳转 */
export function navigateTo(url: string): void;
export function navigateTo(id: string, url?: NullableString): void
export function navigateTo(id: string, url?: NullableString): void {
        $(() => {
                if (id && url) {
                        $(`#${id}`).click(() => {
                                location.href = url;
                        })
                } else {
                        location.href = id;
                }
        })
}

/**delete any HTML Element by Id what you want  */
export function remove(eleID: string) {
        $(() => { $(`#${eleID}`).remove(); })
}

