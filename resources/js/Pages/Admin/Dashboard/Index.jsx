import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton
                    variant="primary"
                    type="button"
                    className="w-40 mb-8"
                >
                    Insert New Movie
                </PrimaryButton>
            </Link>
            {flashMessage?.message && <FlashMessage  message={flashMessage.message}/>}
        </Authenticated>
    );
}
