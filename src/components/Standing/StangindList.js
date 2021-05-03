import React, { useEffect, useState } from 'react';
import fcb_logo from '../../static/img/fcb_logo.png';
import { useSelector } from 'react-redux';

const StandingList = () => {
    const { teams } = useSelector(state => state.teams);
    console.log(teams)
    return (

        <div className="standing-list">
            <div className="standing-header">
                <div>순위</div>
                <div>팀</div>
                <div>경기</div>
                <div>승</div>
                <div>무</div>
                <div>패</div>
                <div>승점</div>
            </div>
            {
                teams.map(team => {
                    return (
                        <div key={team.rank} className="standing-item">
                            <div>{team.rank}</div>
                            <div><img src={team.image} alt="" />{team.name}</div>
                            <div>{team.played}</div>
                            <div>{team.win}</div>
                            <div>{team.draw}</div>
                            <div>{team.lose}</div>
                            <div>{team.points}</div>
                        </div>
                    )

                })}
        </div>
    )
};

export default StandingList;