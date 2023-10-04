function ProfileCard({ title, handle, image, description}) {
    // This can be used to avoid writing the "props." for multiple componenets over and over again
    // same as using a variable 
    // const title = props.title;
    // const handle = props.handle;

    // but considering we use the above mentioned approach, we're still writing .props for each prop
    // for declaring variable which is again same as using it below in the div directly

    // so we use Destructuring which goes something like which again is same as two lines above
    // const { title, handle } = props;

    // but here's the final hack that we can use to not even mention props and still use it
    // it is in the argument itself along with destructing

    // using this we can only take the properties we want instead of using the entire prop object

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;