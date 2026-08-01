export const StatsCard = ({ title, value, icon }) => {
    return (
        <div className="stats-card">

            <div className="stats-top">

                <span>{icon}</span>

                <h4>{title}</h4>

            </div>

            <h1>{value}</h1>

        </div>
    );
};

