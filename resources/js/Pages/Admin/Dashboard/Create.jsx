import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail:"",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (e) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie Malas</h1>
            <form onSubmit={submit}>
                <InputLabel value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    className="mt-1 block w-full"
                    placeholder="Enter the name of the movie"
                    autoComplete="movie"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />

                <InputLabel value="Category" className="mt-4" />
                <TextInput
                    id="categpry"
                    type="text"
                    name="category"
                    className="mt-1 block w-full"
                    placeholder="Enter the category of the movie"
                    autoComplete="category"
                    isFocused={true}
                    onChange={(e) => setData("category", e.target.value)}
                />
                <InputError message={errors.category} className="mt-2" />

                <InputLabel value="Video URL" className="mt-4" />
                <TextInput
                    id="video_url"
                    type="url"
                    name="video_url"
                    className="mt-1 block w-full"
                    placeholder="Enter the video_url of the movie"
                    autoComplete="video_url"
                    isFocused={true}
                    onChange={(e) => setData("video_url", e.target.value)}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <InputLabel value="thumbnail" className="mt-4" />
                <TextInput
                    id="thumbnail"
                    type="file"
                    name="thumbnail"
                    className="mt-1 block w-full"
                    placeholder="Enter the thumbnail of the movie"
                    autoComplete="thumbnail"
                    isFocused={true}
                    onChange={(e) => setData("thumbnail", e.target.files[0])}
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <InputLabel value="rating" className="mt-4" />
                <TextInput
                    id="rating"
                    type="number"
                    name="rating"
                    className="mt-1 block w-full"
                    placeholder="Enter the rating of the movie"
                    autoComplete="rating"
                    isFocused={true}
                    onChange={(e) => setData("rating", e.target.value)}
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel value="Is Featured" className="mr-3 mt-2" />
                    <Checkbox name="is_featured" handleChange={(e) => setData("is_featured", e.target.checked)}/>
                </div>

                <PrimaryButton
                    type="submit"
                    variant="primary"
                    className="mt-6 w-40"
                >
                    Submit
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
