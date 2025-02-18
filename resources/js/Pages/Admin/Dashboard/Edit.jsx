import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated";
import { Head, router, useForm } from "@inertiajs/react";

export default function Edit({ auth, movie }) {
    const { data, setData, errors } = useForm({
        name: movie.name,
        category: movie.category,
        video_url: movie.video_url,
        thumbnail: null, // Set default null agar bisa mengganti file
        rating: movie.rating,
        is_featured: movie.is_featured,
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("name", data.name);
        formData.append("category", data.category);
        formData.append("video_url", data.video_url);
        formData.append("rating", data.rating);
        formData.append("is_featured", data.is_featured ? 1 : 0);

        if (data.thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }

        router.post(route("admin.dashboard.movie.update", movie.id), formData, {
            forceFormData: true, // Memastikan dikirim sebagai form-data
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Updated Movie: {movie.name}</h1>
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
                    defaultValue={movie.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />

                <InputLabel value="Category" className="mt-4" />
                <TextInput
                    id="category"
                    type="text"
                    name="category"
                    className="mt-1 block w-full"
                    placeholder="Enter the category of the movie"
                    autoComplete="category"
                    isFocused={true}
                    defaultValue={movie.category}
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
                    defaultValue={movie.video_url}
                    onChange={(e) => setData("video_url", e.target.value)}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <InputLabel value="thumbnail" className="mt-4" />
                <img
                    src={`/storage/${movie.thumbnail}`}
                    alt={movie.name}
                    className="w-40"
                />
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
                    defaultValue={movie.rating}
                    onChange={(e) => setData("rating", e.target.value)}
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel value="Is Featured" className="mr-3 mt-2" />
                    <Checkbox
                        name="is_featured"
                        checked={data.is_featured}
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
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
